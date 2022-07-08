class AddColumnToCountries < ActiveRecord::Migration[6.1]
  def change
    add_column :countries, :country_code, :string
  end
end
