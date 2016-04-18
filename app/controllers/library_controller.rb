class LibraryController < ApplicationController
  def index
    @libraries = Library.all.order("created_at DESC")
  end

  def show
    @library = Library.find(params[:id])
    @lessons = @library.lessons.order(:tag)

    @joined = false

    if !current_user.nil? && !current_user.libraries.nil?
      @joined = current_user.libraries.include?(@library)
    end
  end
end
