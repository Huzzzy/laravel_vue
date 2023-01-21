<?php

namespace App\Http\Controllers\Person;


use App\Models\Person;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StoreRequest;

class IndexController extends Controller
{
    public function __invoke()
    {
        $people = Person::all();
        return $people;
    }
}