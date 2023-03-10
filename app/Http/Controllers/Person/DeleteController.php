<?php

namespace App\Http\Controllers\Person;


use App\Models\Person;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DeleteController extends Controller
{
    public function __invoke(Person $person)
    {
        $person->delete();

        return response([]);
    }
}