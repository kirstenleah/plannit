class CountriesController < ApplicationController

    def index
        data = File.read('dataset/ne_110m_admin_0_countries.geojson')
        render :json => data
    end
end
