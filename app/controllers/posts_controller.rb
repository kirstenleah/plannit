class PostsController < ApplicationController
    # before_action :authorized

    def index
        render json: Post.all
    end

    def show
        p = Post.find(params[:id])
        render json: p
    end

    def create
        p = Post.create!(post_params)
        render json: p, status: :created
    end

    def update
        p = Post.find(params[:id])
        p.update!(post_params)
        render json: p
    end

    def destroy
        p = Post.find(params[:id])
        p.destroy
        head :no_content
    end

    private
    def post_params
        params.permit(:user_id, :country_id, :country_code, :content, :category, :image, :city)
    end
end
