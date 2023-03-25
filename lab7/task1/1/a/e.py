v=int(input())
t=int(input())
l=109
s=abs(v)*t
k=s%l
if k==0:
    print(0)
else:
    if v<0:
        print(l-k)
    elif v>0:
        print(k)