//DTO: DATA TRANSFER OBJECT Define the shape of incoming request and outgoing response
import {
    IsNotEmpty,
    IsOptional,
    IsString,
  } from 'class-validator';
import { response } from 'express'
  
  export class CreateBookmarkDto {
    @IsString()
    @IsNotEmpty()
    title: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsString()
    @IsNotEmpty()
    link: string;
  }