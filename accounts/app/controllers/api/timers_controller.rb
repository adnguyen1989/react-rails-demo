class Api::TimersController < ApplicationController
  before_action :set_timer, only: [:show, :edit, :update, :destroy]

  # GET /api/timers
  def index
    @timers = Timer.all
    render json: @timers, status: 200
  end

  # GET /api/timers/1
  def show
    render json: @timer, status: 200
  end

  # POST /api/timers
  def create
    @timer = Timer.new(timer_params)

    if @timer.save
      render json: @timer, status: 201
    else
      render json: { errors: @timer.errors }, status: 422
    end
  end

  # PATCH/PUT /api/timers/1
  def update

  end

  # DELETE /api/timers/1
  def destroy
    @timer.destroy
    head 201
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_timer
      @timer = Timer.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def timer_params
      params.require(:timer).permit(
        :title,
        :project
      )
    end
end
