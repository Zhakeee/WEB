a=int(input())
ls=list(map(int, input().split()))
cnt=0
for i in range(0,a):
    if i+1 < a and i>0:
        if ls[i+1]<ls[i]and ls[i-1]<ls[i]:
            cnt+=1    
print(cnt)