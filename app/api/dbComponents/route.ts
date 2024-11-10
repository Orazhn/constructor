import { Redis } from '@upstash/redis';
import dotenv from 'dotenv';
import { getAuth } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';
import DbType from '@/app/types/dbType';

dotenv.config({ path: '.env.local' });

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!
});

async function GetUserData(req: NextRequest) {
  const { userId } = getAuth(req);
  return userId;
}

export async function GET(req: NextRequest) {
  const userId = await GetUserData(req);
  
  try {
    if (userId) {
      const data: DbType | null = await redis.get(`user:${userId}`);
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      })} 
    else {
      return new Response(JSON.stringify({dbelements: [], bgColor: ''}));
    }
  } catch (error) {
    console.error('Redis error:', error);
    return new Response('Redis error', { status: 500 });
  }
 
}

export async function POST(req: NextRequest) {
  const userId = await GetUserData(req);
  console.log(userId);

  const data = await req.json();
  const {dbelements, bgColor} = data

  try {
    if (userId) {
      await redis.set(`user:${userId}`, JSON.stringify({dbelements, bgColor}))
      
      return new Response('Messages posted successfully', { status: 201 });
    } else {
      console.log('User ID not found');
      return new Response('User ID not found', { status: 400 });
    }
  } catch (error) {
    console.error('Redis error while posting:', error);
    return new Response('Failed to post messages', { status: 500 });
  }
}