class LibraryController < ApplicationController
  def index
    @libraries = Library.all.order("created_at DESC")
  end

  def show
    @library = Library.find(params[:id])
    @lessons = @library.lessons.order(:tag)
  end
end
