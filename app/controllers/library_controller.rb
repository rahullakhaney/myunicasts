class LibraryController < ApplicationController
  def index
    @meta_title = meta_title 'Code libraries for developers'
    @q = Library.search(params[:q])
    # @libraries = @q.result

    if params[:subject].blank?
      @libraries = @q.result.all.order("created_at DESC").paginate(page: params[:page], per_page: 6)
    else
      @subject_id = Subject.find_by(name: params[:subject]).id
      @libraries = Library.where(subject_id: @subject_id).order("created_at DESC").paginate(page: params[:page], per_page: 6)
    end
  end

  def show
    @library = Library.find(params[:id])
    @meta_title = meta_title @library.name
    @lessons = @library.lessons.order(:tag)

    @joined = false

    if !current_user.nil? && !current_user.libraries.nil?
      @joined = current_user.libraries.include?(@library)
    end
  end
end
