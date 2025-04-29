import abs from '@/data/exercicies/abs.json'

export async function getAllPosts(): Promise<CollectionEntry<"blog">[]> {
    const posts = await getCollection("blog", ({ data }) => {
        // filter out draft posts
        return data.draft !== true;
    });

    // filter out future posts and sort by date
    const formattedPosts: CollectionEntry<"blog">[] = formatPosts(posts, {
        filterOutFuturePosts: true,
        sortByDate: true,
        limit: undefined,
    });

    return formattedPosts;
}