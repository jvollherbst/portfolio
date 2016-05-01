class UsersController < ApplicationController

  belongs_to :image
  validates :imgname, presence: true

end
