<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Models\Picture;
use App\Models\Stay;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function addFavorite(Request $request){
        $fav = new Favorite;
        $fav->stay_id = $request->stay_id;
        $fav->user_id = $request->user_id;
        
        $fav->save();
        
        return response()->json([
            "status" => "Added to Favorites."
        ], 200);
    }


    public function getStaysByType(Request $request){
         
        $type = $request->type;
        $stays = Stay::where("type",$type)->get();

        return response()->json([
            "status" => "Success",
            "stays" => $stays
        ], 200);
    }

    public function getPicturesbyStayId(Request $request,$id){
        $pic = Picture::where("stay_id", $id)->get();
        return response()->json([
            "status" => "Success",
            "items" => $pic
        ], 200);
    }

}
