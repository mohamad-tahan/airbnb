<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use App\Models\Stay;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function addStay(Request $request){
        $stay = new Stay;
        $stay->name = $request->name;
        $stay->distance = $request->distance;
        $stay->date = $request->date;
        $stay->price = $request->price;
        $stay->rating = $request->rating;
        $stay->type = $request->type;
      
        
        $stay->save();
        
        return response()->json([
            "status" => "Stay Added"
        ], 200);
    }

    public function addPicture(Request $request){
        $pic = new Picture;
        $pic->picture = $request->picture;
        $pic->stay_id = $request->stay_id;
        
        $pic->save();
        
        return response()->json([
            "status" => "Picture Added"
        ], 200);
    }

}
