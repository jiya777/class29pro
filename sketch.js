const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground1;

function preload(){

    
}

function setup(){
    var canvas = createCanvas(1200,400);

ground1=new ground(200,200,200,200);


}

function draw(){
ground1.display();
}