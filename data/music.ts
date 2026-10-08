import type { TrackDescriptor } from "@/types/musicConfig";

/**
 * 侧栏音乐本地曲目数据源。
 * 遵循「零额外负担」原则：配置与数据解耦，此处专用于管理本地曲目列表。
 *
 * 添加曲目：在 musicTracks 中追加一项即可：
 * - id: 唯一标识
 * - title: 曲目标题
 * - artist: 艺术家（可选）
 * - cover: 封面图地址（可选；推荐相对 /src，亦支持 /public 或绝对 URL）
 * - source: 音频文件地址（相对 /public 或绝对 URL）
 * - duration: 曲目时长（秒，可选）
 */
export const musicTracks: readonly TrackDescriptor[] = [
	{
		id: "happy",
		title: "Happy",
		cover: "assets/images/music/your-sound-diary.webp",
		source: "https://img.cyanyuzu.work/audios/Happy.mp3",
	},
	{
		id: "colorful-diary-instrumental",
		title: "【カラフル Diary】Instrumental ver",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E3%80%8E%E3%82%AB%E3%83%A9%E3%83%95%E3%83%AB%20Diary%E3%80%8FInstrumental%20ver.mp3",
	},
	{
		id: "clover-instrumental",
		title: "【クローバー】Instrumental ver",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E3%80%8E%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%90%E3%83%BC%E3%80%8FInstrumental%20ver.mp3",
	},
	{
		id: "ano-koro",
		title: "あの頃",
		cover: "assets/images/music/your-sound-diary.webp",
		source: "https://img.cyanyuzu.work/audios/%E3%81%82%E3%81%AE%E9%A1%B7.mp3",
	},
	{
		id: "arigatou",
		title: "ありがとう",
		cover: "assets/images/music/your-sound-diary.webp",
		source: "https://img.cyanyuzu.work/audios/%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86.mp3",
	},
	{
		id: "itsumademo-kono-mamade",
		title: "いつまでもこのままで",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E3%81%84%E3%81%A4%E3%81%BE%E3%81%A7%E3%82%82%E3%81%93%E3%81%AE%E3%81%BE%E3%81%BE%E3%81%A7.mp3",
	},
	{
		id: "kakegae-no-nai-mono",
		title: "かけがえのないもの",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E3%81%8B%E3%81%91%E3%81%8C%E3%81%88%E3%81%AE%E3%81%AA%E3%81%84%E3%82%82%E3%81%AE.mp3",
	},
	{
		id: "doushitara-ii-no",
		title: "どうしたらいいの",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E3%81%A9%E3%81%86%E3%81%97%E3%81%9F%E3%82%89%E3%81%84%E3%81%84%E3%81%AE.mp3",
	},
	{
		id: "nigiyakana-jikan",
		title: "にぎやかな時間",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E3%81%AB%E3%81%8E%E3%82%84%E3%81%8B%E3%81%AA%E6%97%B6%E9%97%B4.mp3",
	},
	{
		id: "clover-short",
		title: "クローバー ショートver",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%90%E3%83%BC%20%E3%82%B7%E3%83%A7%E3%83%BC%E3%83%88ver.mp3",
	},
	{
		id: "issho-ni-ikou-ne",
		title: "一緒にいこうね♪",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E4%B8%80%E7%BB%AA%E3%81%AB%E3%81%84%E3%81%93%E3%81%86%E3%81%AD%E2%99%AA.mp3",
	},
	{
		id: "tsutaetai-yo",
		title: "伝えたいよ",
		cover: "assets/images/music/your-sound-diary.webp",
		source: "https://img.cyanyuzu.work/audios/%E4%BC%9D%E3%81%88%E3%81%9F%E3%81%84%E3%82%88.mp3",
	},
	{
		id: "kimi-to-no-kyoukai-sen",
		title: "君との境界线",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E5%90%9B%E3%81%A8%E3%81%AE%E5%A2%83%E7%95%8C%E7%BA%BF.mp3",
	},
	{
		id: "otona-ni-naritai",
		title: "大人になりたい",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E5%A4%A7%E4%BA%BA%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%9F%E3%81%84.mp3",
	},
	{
		id: "hoshikuzu-harmony",
		title: "星屑ハーモニー",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E6%98%9F%E5%B1%91%E3%83%8F%E3%83%BC%E3%83%A2%E3%83%8B%E3%83%BC.mp3",
	},
	{
		id: "sakurairo-no-kimi-to",
		title: "桜色の君と",
		cover: "assets/images/music/your-sound-diary.webp",
		source: "https://img.cyanyuzu.work/audios/%E6%A1%9C%E8%89%B2%E3%81%AE%E5%90%9B%E3%81%A8.mp3",
	},
	{
		id: "itoshisa-afurete",
		title: "爱しさあふれて",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E7%88%B1%E3%81%97%E3%81%95%E3%81%82%E3%81%B5%E3%82%8C%E3%81%A6.mp3",
	},
	{
		id: "genjitsu",
		title: "现実",
		cover: "assets/images/music/your-sound-diary.webp",
		source: "https://img.cyanyuzu.work/audios/%E7%8E%B0%E5%AE%9F.mp3",
	},
	{
		id: "ude-no-naka-de",
		title: "腕の中で",
		cover: "assets/images/music/your-sound-diary.webp",
		source: "https://img.cyanyuzu.work/audios/%E8%85%95%E3%81%AE%E4%B8%AD%E3%81%A7.mp3",
	},
	{
		id: "wakaba-no-koro-ni",
		title: "若叶のころに",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E8%8B%A5%E5%8F%B6%E3%81%AE%E3%81%93%E3%82%8D%E3%81%AB.mp3",
	},
	{
		id: "hidamari",
		title: "阳だまり",
		cover: "assets/images/music/your-sound-diary.webp",
		source: "https://img.cyanyuzu.work/audios/%E9%98%B3%E3%81%A0%E3%81%BE%E3%82%8A.mp3",
	},
	{
		id: "ame-wo-matteru",
		title: "雨を待ってる",
		cover: "assets/images/music/your-sound-diary.webp",
		source:
			"https://img.cyanyuzu.work/audios/%E9%9B%A8%E3%82%92%E5%BE%85%E3%81%A3%E3%81%A6%E3%82%8B.mp3",
	},
];
