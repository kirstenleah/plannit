class UsersController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        render json: User.all
    end
    
    def create
        new_user = User.create!(user_params)
        render json: new_user, status: :created
    end

    def show
        u = User.find_by(id: session[:current_user])
        puts "user: #{u}" 
        render json: {"user" => "here"}, status: :ok
    end

    private
    def user_params
        params.permit(:username, :password)
    end

    def invalid
        render json: {errors: "Username not found in database"}
    end
end
