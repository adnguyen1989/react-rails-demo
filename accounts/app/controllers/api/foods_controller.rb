class FoodsController < ApplicationController
  def index
    query = params[:q]
    @foods = Food.where("name LIKE ?", "%#{query}%")
    render json: @foods, status: 200
  end
end
