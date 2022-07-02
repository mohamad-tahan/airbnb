<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
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
}
