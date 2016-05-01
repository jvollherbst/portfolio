class CreatePortfolios < ActiveRecord::Migration
  def change
    create_table :portfolios do |t|
      t.string :portname
      t.string :tag
      t.references :image
      t.attachment :portimg
    end
  end
end
