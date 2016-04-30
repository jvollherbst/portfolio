class Image < ActiveRecord::Base
  validates :imgname, :category, :tag, :description, :imgurl, presence: true
end
