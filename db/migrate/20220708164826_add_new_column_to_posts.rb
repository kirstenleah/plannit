class AddNewColumnToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :country_code, :string
  end
end
