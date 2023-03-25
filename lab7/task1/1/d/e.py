a=int(input())
ls=list(map(int,input().split()))
for i in range(0,a):
    if i+1<a:
        if ls[i]<0 and ls[i+1]<0:
            print("YES")
            exit()
print("NO")