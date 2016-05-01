class ImagesController < ApplicationController

  before_action :authenticate, only: :new

  def index
    @images = Image.all
  end

  def new
    @image = Image.new
  end

  def show
    @image = Image.find(params[:id])
  end

  def create
    @image = Image.create(image_params)
    @image.save
    redirect_to @image
  end

  private

  def image_params
    params.require(:image).permit(:imgname, :category, :tag, :description, :imgurl, :image)
  end

end
