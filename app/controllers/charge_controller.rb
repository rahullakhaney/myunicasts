class ChargeController < ApplicationController
  before_action :authenticate_user!

  def free
    library = Library.find(params[:library_id])
    current_user.subscriptions.create(library: library)

    redirect_to library
  end
end