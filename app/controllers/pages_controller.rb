class PagesController < ApplicationController
  def home
    
    @libraries = Library.all.order("created_at DESC").limit(6)
  end
end
