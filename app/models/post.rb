class Post < ApplicationRecord
  belongs_to :user
  belongs_to :country
  has_many :likes
  has_many :comments

  enum category: {
    lodging: 0,
    food: 1,
    experiences: 2
  }
end
