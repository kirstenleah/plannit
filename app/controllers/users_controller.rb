class UsersController < ApplicationController
    def create
        new_user = User.create!(user_params)
        render json: new_user, status: :created
    end

    private
    def user_params
        params.permit(:username, :password)
    end
end
