class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :imgname
      t.string :category
      t.string :tag
      t.string :description
      t.string :imgurl
      t.attachment :image
    end
  end
end
