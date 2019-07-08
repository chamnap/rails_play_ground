class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text       :content
      t.string     :privacy

      t.timestamps null: false
    end
  end
end
