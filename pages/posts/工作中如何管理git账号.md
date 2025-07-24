---
title: 工作中如何优雅的管理Git账号
description: 使用Git includeIf配置优雅管理多个Git账号，避免提交时账号混乱
date: 2025-05-12T16:00:00.000+08:00
lang: zh
type: note
duration: 8min
---

## 发现问题

我们经常会遇到一个问题，我们拥有公司内邮箱管理的工蜂账号和私人邮箱管理的GitHub账号，不同账号会配置git里的`user.name`和`user.email`。

而往往我们默认会配置使用公司里的邮箱和用户名，这样向GitHub提交一些commit信息的时候会出现没法匹配到正确的邮箱的情况，例如当时当我在向TDesign或其他开源库提交commit时，如果忘记切账号，会出现下面尴尬的情况：

![Git账号混乱问题](/images/posts/git-account-problem.png)

这显然会存在两个弊端：

1. **公司内个人花名的泄露**（因为我们习惯把英文名作为git.name）
2. **自己的贡献没法记录在自己的GitHub主页**，很苦恼

## 如何解决问题

这里可以通过使用Git的`includeIf`的原理，优雅的解决这个问题：

> 📖 参考文档：[Git Config Includes](https://git-scm.com/docs/git-config#_includes)

## 解决方案

### 1. 准备两个文件夹

我这里准备的文件夹是`~/work/` 和 `~/personal/` 作为两个分离的工作区：

![文件夹结构](/images/posts/git-folders-structure.png)

### 2. 分别在work和personal文件夹下配置git信息

**~/.work.gitconfig**

```ini
[user]
    name = clutchliang
    email = clutchliang@tencent.com
```

**~/.personal.gitconfig**

```ini
[user]
    name = your_name
    email = your_email@qq.com  # 以qq邮箱为例
```

### 3. 配置全局git配置

在全局根目录配置git配置信息 `~/.gitconfig`，如果没有自己创建一个即可：

![全局配置文件位置](/images/posts/git-global-config-location.png)

配置信息如下：

![全局配置内容](/images/posts/git-global-config-content.png)

```ini
[includeIf "gitdir:~/work/"]
    path = .work.gitconfig
[includeIf "gitdir:~/personal/"]
    path = .personal.gitconfig
```

简单的来说，这个全局的配置能根据git config的include规则，自动切换不同路径下的个人git信息。

### 工作原理

当 Git 操作发生时（如 commit），系统会：

1. **检测当前 .git 目录的路径**
2. **若路径匹配 `~/work/`** → 加载 `~/.work.gitconfig`
3. **若路径匹配 `~/personal/`** → 加载 `~/.personal.gitconfig`

### 4. 管理项目分区

这样配置之后，你只需要在work路径下clone公司内的项目，在personal文件夹下管理自己的GitHub项目，就能轻松管理git账户了。

![项目分区管理](/images/posts/git-project-management.png)

### 验证效果

简单验证一下，大功告成：

![验证结果](/images/posts/git-verification-result.png)

## 总结

通过使用Git的`includeIf`配置，我们可以：

- ✅ **自动切换账号**：根据项目路径自动使用对应的Git配置
- ✅ **避免信息泄露**：工作和个人项目完全分离
- ✅ **贡献记录准确**：GitHub贡献能正确记录到个人主页
- ✅ **操作简单**：一次配置，终身受益

这种方法比每次手动切换`git config`要优雅得多，强烈推荐！
