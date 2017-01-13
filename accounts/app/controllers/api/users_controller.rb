class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users, status: 200
  end

  def create
    @user = User.new(create_user_params)
    if @user.save
      render json: @user, status: 201
    else
      render json: {errors: @user.errors}, status: 422
    end
  end

  private

  def create_user_params
    params.require(:user).permit(
      :name,
      :email,
      :department,
      :course
    )
  end
end
