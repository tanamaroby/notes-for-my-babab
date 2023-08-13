---
sidebar_position: 2
---

# `<ctype.h>` Functions

:::note

Using `int c` instead of `char c` for parameters allows the function to handle a wider range of values,
not only characters, but also the special value `EOF` (End of File) that might be returned by input/output functions.

Also ensuring compatibility with standard library functions, *input/output operations*, and consistent behavior across different contexts.

:::

### `ft-isalpha`

#### Description

Checks for an alphabetic character.

#### Argument

The function takes in one argument.

`int c`: The value to be checked.

```c
int ft_isalpha(int c)
```
