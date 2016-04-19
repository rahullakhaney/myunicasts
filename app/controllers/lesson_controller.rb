class LessonController < ApplicationController
  before_action :authenticate_user!

  def show
    library = Library.find(params[:library_id])
    @lessons = library.lessons.order(:tag)

    joined = false

    if !current_user.nil? && !current_user.libraries.nil?
      joined = current_user.libraries.include?(library)
    end

    if joined

      @lesson = @lessons.find(params[:id])

      @next_lesson = @lesson.next
      @prev_lesson = @lesson.prev
    else
      flash[:notice] = "You don't have the permission to view this page"
      redirect_to library
    end
  end
end
