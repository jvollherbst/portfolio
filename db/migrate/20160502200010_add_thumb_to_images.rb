class AddThumbToImages < ActiveRecord::Migration
  def change
    add_column :images, :thumb, :string
  end
end
