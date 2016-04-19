class LibraryController < ApplicationController
  def index
    @q = Library.search(params[:q])
    # @libraries = @q.result

    if params[:subject].blank?
      @libraries = @q.result.all.order("created_at DESC")
    else
      @subject_id = Subject.find_by(name: params[:subject]).id
      @libraries = Library.where(subject_id: @subject_id).order("created_at DESC")
    end
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
