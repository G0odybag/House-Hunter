
<?php
require_once __DIR__ . '/includes/db.php';
require_once __DIR__ . '/includes/functions.php';
require_once __DIR__ . '/includes/header.php';

$articles = $pdo->query("SELECT a.*, u.username FROM articles a JOIN users u ON a.author_id = u.id ORDER BY a.created_at DESC")->fetchAll();

?>

<div class="container mt-4">
    <h2>Latest News</h2>
    <?php foreach ($articles as $a): ?>
        <div class="card mb-3">
            <div class="card-body">
                <h5><?= htmlspecialchars($a['title']) ?></h5>
                <p class="text-muted">By <?= htmlspecialchars($a['username']) ?> on <?= $a['created_at'] ?></p>
                <p><?= nl2br(htmlspecialchars(substr($a['body'], 0, 150))) ?>...</p>
                <a href="article.php?id=<?= $a['id'] ?>" class="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    <?php endforeach;
    require_once __DIR__ . '/includes/footer.php';
    ?>
</div>
