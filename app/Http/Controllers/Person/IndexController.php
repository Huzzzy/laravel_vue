<?php

namespace App\Http\Controllers\Person;


use App\Models\Person;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StoreRequest;
use App\Http\Resources\Perosn\PersonResource;

class IndexController extends Controller
{
    public function __invoke()
    {
        $people = Person::all();
        return PersonResource::collection($people);
    }
}