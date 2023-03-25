a=int(input())
ls=list(map(int, input().split()))
for i in range(0,a):
    if ls[i]%2==0:
        print(ls[i],end=' ')