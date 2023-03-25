a=int(input())
a+=1
n=1
while(n<a):
    if(n==1):
        print(1, end=' ')
    if(n*2<a):
        print(n*2, end=' ')
    n*=2