class LessonController < ApplicationController
  def show
    library = Library.find(params[:library_id])
    @lessons = library.lessons.order(:tag)
    @lesson = @lessons.find(params[:id])
  end
end
