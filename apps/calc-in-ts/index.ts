type Equals<A, B> = A extends B ? (B extends A ? true: false) : false

type Zero = "ZERO"

type AddOne<T> = () => T

type MinusOne<T> = T extends () => infer R ? R : never

type Add<A, B> = B extends Zero ? A : Add<AddOne<A>, MinusOne<B>> 

type Multiple<A, B> = B extends () => Zero ? A : Add<Multiple<A, MinusOne<B>>, A>

type n1 = AddOne<Zero>
type n2 = AddOne<n1>
type n3 = AddOne<n2>
type n4 = Multiple<n2, n2>
type n5 = Add<n2, n3>
type n15 = Multiple<n3, n5>

type Result = Equals<Add<n1, n3>, Multiple<n2, n2>> // true