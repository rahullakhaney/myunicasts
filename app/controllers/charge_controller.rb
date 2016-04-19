class ChargeController < ApplicationController
  before_action :authenticate_user!
  skip_before_filter :verify_authenticity_token
  def free
    library = Library.find(params[:library_id])
    current_user.subscriptions.create(library: library)

    redirect_to library
  end

  def pay
    library = Library.find(params[:library_id])
      current_user.subscriptions.create(library: library)
      redirect_to library
  end
end