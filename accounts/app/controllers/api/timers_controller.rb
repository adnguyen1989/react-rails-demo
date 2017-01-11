class Api::TimersController < ApplicationController
  before_action :set_timer, only: [:show, :edit, :update, :destroy, :start, :stop]

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

  # POST /api/timers/start
  def start
    # Rails.logger.debug("debug:: these are params: #{params.inspect}")
    @timer.update_attributes(runningSince: params[:start])
    head 204
  end

  def stop
    @timer.update_attributes(
      elapsed: @timer.elapsed + params[:stop] - @timer.runningSince,
      runningSince: nil
    )
    head 204
  end

  # PATCH/PUT /api/timers/1
  def update
    if @timer.update_attributes(timer_params)
      head 204
    else
      render json: { errors: @timer.errors }, status: 422
    end
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
