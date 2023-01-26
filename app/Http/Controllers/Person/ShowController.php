<?php

namespace App\Http\Controllers\Person;


use App\Models\Person;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Person\StoreRequest;
use App\Http\Resources\Perosn\PersonResource;

class ShowController extends Controller
{
    public function __invoke(Person $person)
    {
        return new PersonResource($person);
        //return $person;
    }
}