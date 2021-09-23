class StoicsController < ApplicationController
  before_action :set_stoic, only: [:show, :update, :destroy]

  # GET /stoics
  def index
    @stoics = Stoic.all

    render json: @stoics
  end

  # GET /stoics/1
  def show
    render json: @stoic
  end

  # POST /stoics
  def create
    @stoic = Stoic.new(stoic_params)

    if @stoic.save
      render json: @stoic, status: :created, location: @stoic
    else
      render json: @stoic.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stoics/1
  def update
    if @stoic.update(stoic_params)
      render json: @stoic
    else
      render json: @stoic.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stoics/1
  def destroy
    @stoic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stoic
      @stoic = Stoic.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def stoic_params
      params.require(:stoic).permit(:name)
    end
end
