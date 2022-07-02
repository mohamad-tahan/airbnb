<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
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


    public function getAllStays($id = null){
        if($id != null){
            $stay = Stay::find($id);  
        }else{
            $stay = Stay::all();
        }
        
        return response()->json([
            "status" => "Success",
            "stays" => $stay
        ], 200);
    }
}
