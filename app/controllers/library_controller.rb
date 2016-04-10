class LibraryController < ApplicationController
  def index
    @libraries = Library.all
  end

  def show
    @library = Library.find(params[:id])
    @lessons = @library.lessons.order(:tag)
  end
end
