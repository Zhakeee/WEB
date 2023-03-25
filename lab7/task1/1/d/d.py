a=int(input())
ls=list(map(int,input().split()))
cnt=0
for i in range(0,a):
    if(i+1<a):
        if ls[i]<ls[i+1]:
            cnt+=1
print(cnt)