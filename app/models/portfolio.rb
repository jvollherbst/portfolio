class PortfolioController < ApplicationController

  belongs_to :image
  validates :imgname, :tag, presence: true

end
