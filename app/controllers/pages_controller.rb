class PagesController < ApplicationController
  def home
    # if current_user
    #   redirect_to library_index_path
    # end
    @libraries = Library.all.order("created_at DESC").limit(6)
  end
end
