a=int(input())
cnt=0
ls=list(map(int,input().split()))
for i in range(0,a):
    if ls[i]>0:
        cnt+=1
print(cnt)